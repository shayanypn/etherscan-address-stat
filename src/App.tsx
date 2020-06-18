import React from 'react';
import Form from './components/Form';

const App: React.FC = () => {

    const handleSearch = (data:any) => {
        console.log(data);
    };

    return (
        <div className="container">
            <h1 className="text-center">Ethereum address stat</h1>
            <main>
                <Form
                    onSubmit={handleSearch}
                />
            </main>
        </div>
    );
}

export default App;
