import React from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

function Dashboard() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'withdrawalDate',
      headerName: 'Withdrawal Date',
      width: 150,
      editable: true,
    },
    {
      field: 'from',
      headerName: 'From',
      type: 'text',
      width: 110,
      editable: true,
    },
    {
      field: 'to',
      headerName: 'To',
      type: 'text',
      width: 110,
      editable: true,
    },
    {
      field: 'amount',
      headerName: 'Amount',
//       width: 150,
      editable: true,
    },
  ];

  const rows = [];

  return (
    <Box
      sx={{
        height: 400, // Set a fixed height for the DataGrid
        width: '100%', // Ensure it takes the full width of the container
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        mt: 4, // Add some margin at the top
      }}
    >
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1" gutterBottom>
        Balance: $1000
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default Dashboard;