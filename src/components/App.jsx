import Statistic from "./Statistic/Statistic";
import Contacts from "./Contacts/Contacts";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <div style={{margin: '0 auto', width: "70%"}}>
      <Statistic/>
      <Contacts/>
      </div>
    </div>
  );
};
