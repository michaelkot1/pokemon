import React, { useState } from 'react';
import './Welcomepage.css';
import PokemonExplorer from './component1';
import CaretakersView from './component2';
import ItemStore from './component3';
import RandomPokemon from './component4';

type Tab = 'Explorer' | 'Caretakers' | 'Store' | 'Generator';

const WelcomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Explorer');

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="welcome-page">
      <h1>Welcome to the Catch 'Em All Shelter</h1>
      <p><center>We are an online Pokemon adoption center!</center></p>
      <div className="tab-container">
        <button className={activeTab === 'Explorer' ? 'active' : ''} onClick={() => handleTabClick('Explorer')}>
          Explorer
        </button>
        <button className={activeTab === 'Caretakers' ? 'active' : ''} onClick={() => handleTabClick('Caretakers')}>
          Caretakers
        </button>
        <button className={activeTab === 'Store' ? 'active' : ''} onClick={() => handleTabClick('Store')}>
          Store
        </button>
        <button className={activeTab === 'Generator' ? 'active' : ''} onClick={() => handleTabClick('Generator')}>
          Generator
        </button>
      </div>
      {activeTab === 'Explorer' && <Component1 />}
      {activeTab === 'Caretakers' && <Component2 />}
      {activeTab === 'Store' && <Component3 />}
      {activeTab === 'Generator' && <Component4 />}
    </div>
  );

};

const Component1: React.FC = () => {
  return <div><PokemonExplorer /> </div>;
};

const Component2: React.FC = () => {
  return <div>  <h4>Meet the Caretakers</h4>"As a passionate Pokemon caretaker, I am thrilled to share the
    knowledge and experience in raising happy and healthy pokemon with fellow trainers."
    <CaretakersView /></div>;
};

const Component3: React.FC = () => {
  return <div><ItemStore /></div>;
};

const Component4: React.FC = () => {
  return <div><RandomPokemon /></div>;
};

export default WelcomePage;
