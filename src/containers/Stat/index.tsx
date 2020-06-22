import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import QRCode from 'qrcode';
import { TransactionsType, BalanceResponseType, TransactionsResponseType, StateType } from './../../types';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import Transactions from '../../components/Transactions';
import API from '../../services/API';
import IconQR from '../../assets/icon-qr.png';
import IconBalance from '../../assets/icon-balance.png';
import IconEther from '../../assets/icon-ether.png';

const Stat: React.FC = () => {
  const history = useHistory();
  const { network, address } = useParams();
  const [isLoading, setIsLoading] = React.useState(false);
  const [enableModal, setEnableModal] = React.useState(false);
  const [state, setState] = React.useState<StateType>({ balance: '', transactions: [] });
  const qrcodeEle = React.useRef(null);
  const Api = React.useRef<API | null>(null);

  const fetchAccountTransactions = () => {
    Api.current!.fetchAccountTransactions().then(
      (response: TransactionsResponseType) => {
        setState((prevState) => ({
          ...prevState,
          transactions: response.result
            .sort((a: TransactionsType, b: TransactionsType) => Number(b.timeStamp) - Number(a.timeStamp))
            .slice(0, 10),
        }));
        setIsLoading(false);
      },
      (error: Error) => {
        console.error(error);
        setIsLoading(false);
      }
    );
  };

  const handleModal = () => {
    setEnableModal(true);
    QRCode.toCanvas(qrcodeEle.current, address, (error: Error) => {
      if (error) console.error(error);
    });
  };

  React.useEffect(() => {
    if (!network || !address) {
      return;
    }

    Api.current = new API(network, address);

    setIsLoading(true);
    Api.current.fetchAccountBalance().then(
      (response: BalanceResponseType) => {
        setState((prevState) => ({
          ...prevState,
          balance: response.result,
        }));
        setTimeout(() => fetchAccountTransactions(), 3000);
      },
      (error: Error) => {
        console.error(error);
        setIsLoading(false);
      }
    );
  }, [network, address]);

  return (
    <main>
      <Modal
        portalNodeId="root_modal"
        active={enableModal}
        onClose={() => setEnableModal(false)}
      >
        <div className="bx-qrcode text-center">
          <h3>Etherum Address</h3>
          <canvas ref={qrcodeEle}></canvas>
          <p><b>{address}</b></p>
          <p>Point your phone to this screen to capture the code</p>
        </div>
      </Modal>
      <Card className="mt-3 card-empty" isLoading={isLoading} noPadding>
        <button
          id="btn-back"
          className="btn btn-secondary btn-sm"
          onClick={() => history.push('/')}
        >
          Back to search
        </button>
        <Card className="mt-3 p-1 card-stat pointer" noPadding>
          <div className="d-flex justify-content-between" onClick={handleModal}>
            <div>
              <img src={IconEther} alt="icon etherum" />
              Address: <b id="stat-address">{address}</b>
            </div>
            <img src={IconQR} alt="icon qr-code" />
          </div>
        </Card>
        <small id="input-address-tip" className="form-text text-muted">
          You can scan the address with QR reader by clicking on the address
          box.
        </small>

        <Card className="mt-3 mb-3 p-1 card-stat" noPadding>
          <img src={IconBalance} alt="icon balance" />
          Balance: <b id="stat-balance">{state.balance}</b>
        </Card>

        {state.transactions.length ? (<Card className="mb-3" noPadding>
            <Transactions items={state.transactions} />
          </Card>) : (<div className="alert alert-warning text-center" role="alert">
            No transactions found for this address!
          </div>
        )}
      </Card>
    </main>
  );
};

export default Stat;
