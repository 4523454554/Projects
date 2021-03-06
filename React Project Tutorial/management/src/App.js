import Customer from './components/Customer';
import './App.css';
import { Component } from 'react';
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
},

{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '김꺽정',
  'birthday': '900129',
  'gender': '남자',
  'job': '대학생'
},

{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '이개똥',
  'birthday': '921127',
  'gender': '여자',
  'job': '직장인'
}
]

class App extends Component {
  render() {
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
            <TableBody>
            {customers.map(c => {return (<Customer key={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />)})}
            </TableBody>
          
        </Table>
      </div>
    );
  }
}

export default App;
