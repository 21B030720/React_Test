import './App.css'
import ClubForm from './components/Form/ClubForm';
import TableDropdown from './components/Table/TableDropDown';
import { students } from './utils/mockStudents';
import Card from './components/Card/Card';
import Button from './components/Button/Button';


function App() {

  return (
    <>
    <Button
        text="QR-код" 
        icon="/icons/Frame.png" 
        onClick={() => alert('Button clicked!')} 
      />
    <Card
        avatar="/images/Avatar.png"
        title="Байрамов Б.О."
        subtitle="08.07.2024 10:00-11:00"
      />
    <ClubForm />
    <TableDropdown students={students} status='pending' /> 
    {/* Another example */}
    {/* <TableDropdown students={students} status='declined' />  */} 

    </>
  )
}

export default App
