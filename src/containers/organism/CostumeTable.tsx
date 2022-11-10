import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

interface Column {
  id: 'name' | 'code' | 'population' | 'size' ;
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Nama', minWidth: 170 },
  { id: 'code', label: 'Tim', minWidth: 100 },
  {
    id: 'population',
    label: 'Produk dan Riset',
    minWidth: 170,   
  },
  {
    id: 'size',
    label: 'Recent Posts',
    minWidth: 170,
  },
];

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
}

function createData(
  name: string,
  code: string,
  population: number,
  size: number,
): Data {
  const density = population / size;
  return { name, code, population, size };
}

const rows = [
  createData('Prof. Dr. Suhono Harso Supangkat, M. Eng.', 'KEPALA PUSAT INOVASI KOTA DAN KOMUNITAS CERDAS', 1324171354, 3287263),
  createData('Prof. Ir. Haryo Winarso, M.Eng., Ph.D.', 'PENELITI SENIOR', 1403500365, 9596961),
  createData('Dr. Ir. Dwina Roosmini, M.S.', 'PENELITI SENIOR', 60483973, 301340),
  createData('Dr. Ir. Arry Akhmad Arman, M.T.', 'PENELITI SENIOR', 327167434, 9833520),
  createData('Ir. Edi Leksono M.Eng., Ph.D.', 'PENELITI SENIOR', 37602103, 9984670),
  createData('I. G. B. Baskara Nugraha, S.T., M.T., Ph.D', 'PENELITI SENIOR', 25475400, 7692024),
  createData('Dr. Puspita Dirgahayani', 'PENELITI SENIOR', 83019200, 357578),
  createData('Santi Novani, S.T., M.T., Ph.D.', 'PENELITI SENIOR', 4857000, 70273),
  createData('Adiwan Fahlan Aritenang S.T., M.GIT., Ph.D.', 'PENELITI SENIOR', 126577691, 1972550),
  createData('Dr. Fadhil Hidayat, S.Kom., M.T.', 'PENELITI SENIOR', 126317000, 377973),
  createData('Fetty Fitriyanti Lubis, S.T., M.T.', 'PENELITI SENIOR', 67022000, 640679),
];

export default function CostumeTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
