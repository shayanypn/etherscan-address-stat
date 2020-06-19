import React    from 'react';
import {
    useHistory, 
    useParams
}   from "react-router-dom";
import Card         from '../../components/Card';
import API          from '../../services/API';
import IconQR       from '../../assets/icon-qr.png';
import IconBalance  from '../../assets/icon-balance.png';
import IconEther    from '../../assets/icon-ether.png';

const Stat: React.FC = () => {
    const history = useHistory();
    const { network, address } = useParams();
    const [isLoading, setIsLoading] = React.useState(false);
    const [state, setState] = React.useState({ balance: '', transactions: [] });
    let Api:any = React.useRef(null);;

    const fetchAccountTransactions = () => {
        Api.current.fetchAccountTransactions()
        .then(
            (response:any) => {
                setState(prevState => ({
                    ...prevState,
                    transactions: response.result.sort((a:any,b:any) => {
                            return (new Date(b.timeStamp)).getTime() - (new Date(a.timeStamp)).getTime();
                        }).slice(0, 10)
                }));
                setIsLoading(false);
            },
            (error:any) => {
                console.error(error);
                setIsLoading(false);
            }
        );
    }

    React.useEffect(()=> {

        if (!network || !address) {return;}

        Api.current = new API(network, address);

        setIsLoading(true);
        Api.current.fetchAccountBalance()
        .then(
            (response:any) => {
                setState(prevState => ({
                    ...prevState,
                    balance: response.result
                }));
                setTimeout(() => fetchAccountTransactions(), 3000);
            },
            (error:any) => {
                console.error(error);
                setIsLoading(false);
            }
        );
    }, [network, address]);


    return (
        <main>
            <button
                id="btn-back"
                className="btn btn-secondary btn-sm"
                onClick={() => history.push('/')}
            >
                Back to search
            </button>

            <Card className="mt-3 card-empty" isLoading={isLoading} noPadding>
                <Card
                    className="mb-3 p-1 card-stat"
                    noPadding
                >
                    <div className="d-flex justify-content-between">
                        <div>
                            <img src={IconEther} alt="icon etherum" />
                            Address: <b id="stat-address">{address}</b>
                        </div>
                        <img src={IconQR} alt="icon qr-code" />
                    </div>
                </Card>
                <Card
                    className="mt-3 mb-3 p-1 card-stat"
                    noPadding
                >
                    <img src={IconBalance} alt="icon balance" />
                    Balance: <b id="stat-balance">{state.balance}</b>
                </Card>

                <Card
                    className="mb-3"
                    noPadding
                >
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Block Number</th>
                                <th scope="col">Nonce</th>
                                <th scope="col">Detail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                state.transactions.map((transaction:any, indx: number) => (
                                    <tr key={transaction.blockNumber}>
                                        <th scope="row">{indx+1}</th>
                                        <td>{transaction.blockNumber}</td>
                                        <td>{transaction.nonce}</td>
                                        <td></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </Card>
            </Card>

        </main>
    );
}

export default Stat;
