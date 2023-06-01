import State from "../components/phonebook/phonebook"

export const App = () => {
  return (
    <div
      style={{
        padding: "40px",
       // height: '100vh',
        display: 'flex',
        //justifyContent: 'center',
        //alignItems: 'center',
        //fontSize: 40,
        color: '#010101'
      }}
    >
      <State
        state={{
        contacts: [],
        filter: '',
        name: '',
        number: ''
    }}
      />
    </div>
  );
};
