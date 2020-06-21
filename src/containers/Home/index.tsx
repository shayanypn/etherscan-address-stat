import React from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../../components/Form';
import { storeAddresses, restoreAddresses } from '../../utils';

interface formType {
  address: string;
  network: string;
}

const Home: React.FC = () => {
  const history = useHistory();
  const [usedAddresses, setUsedAddresses] = React.useState([] as string[]);

  const handleSearch = (data: formType) => {
    const already_used = usedAddresses.find(
      (address) => address === data.address
    );
    if (!already_used) {
      const recent_addresses = [data.address, ...usedAddresses].slice(0, 5);
      setUsedAddresses(recent_addresses);

      // it would be better to handle this by parent component
      // as it would be separate from FORM component
      storeAddresses(recent_addresses);
    }

    history.push(`/stat/${data.address}/${data.network}`);
  };

  React.useEffect(() => {
    setUsedAddresses(restoreAddresses());
  }, []);

  return (
    <main>
      <p className="text-center p-description">
        Simple application to show an ethereum balance and transtion by using
        its address. You can enter an ethereum address or you can choose from
        the last address you already used, then choose your network and press
        search button.
      </p>
      <hr />
      <Form addresses={usedAddresses} onSubmit={handleSearch} />
    </main>
  );
};

export default Home;
