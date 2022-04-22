import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { convertDate } from '../../utils/convertDate';

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.maVe}
        </TableCell>
        <TableCell align="right">{convertDate(row.ngayDat)}</TableCell>
        <TableCell align="right">{row.tenPhim}</TableCell>
        <TableCell align="right">{row.giaVe}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Danh sách ghế
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Tên hệ thống rạp</TableCell>
                    <TableCell>Tên rạp</TableCell>
                    <TableCell align="right">Số ghế</TableCell>
                    <TableCell align="right">Mã ghế</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.danhSachGhe.map((chairRow) => (
                    <TableRow key={chairRow.maGhe}>
                      <TableCell component="th" scope="row">
                        {chairRow.tenHeThongRap}
                      </TableCell>
                      <TableCell>{chairRow.tenRap}</TableCell>
                      <TableCell align="right">{chairRow.tenGhe}</TableCell>
                      <TableCell align="right">
                        {chairRow.maGhe}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function BookingHistory(props) {
  const { bookedData } = props;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Mã vé</TableCell>
            <TableCell align="right">Ngày đặt</TableCell>
            <TableCell align="right">Tên phim</TableCell>
            <TableCell align="right">Giá vé</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookedData.map((row) => (
            <Row key={row.maVe} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}