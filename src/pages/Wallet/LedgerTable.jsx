import React from 'react'

const LedgerTable = () => {
  const tableHead = ['Transaction Date','Currency','Credit/Debit','Transaction Amt.','Balance Amount','Description'];
  const tableData=[
    {
        TransactionDate:'20/2/2002',
        Currency:'INR',
        Credit_Debit:'Credit',
        TranxAmount:'50000',
        BalAmount:'50000',
        description:'This is desctiption of our ledger This is desctiption of our ledger This is desctiption of our ledger'
    },
    {
        TransactionDate:'20/2/2002',
        Currency:'USD',
        Credit_Debit:'Debit',
        TranxAmount:'50000',
        BalAmount:'50000',
        description:'This is desctiption of our ledger This is desctiption of our ledger This is desctiption of our ledger'
    },
    {
        TransactionDate:'20/2/2002',
        Currency:'INR',
        Credit_Debit:'Credit',
        TranxAmount:'50000',
        BalAmount:'50000',
        description:'This is desctiption of our ledger This is desctiption of our ledger This is desctiption of our ledger'
    },
    {
        TransactionDate:'20/2/2002',
        Currency:'USD',
        Credit_Debit:'Debit',
        TranxAmount:'50000',
        BalAmount:'50000',
        description:'This is desctiption of our ledger This is desctiption of our ledger This is desctiption of our ledger'
    },
]


  return (
    <div className='p-2 '>
        <table className='w-100'>

            <thead className=''>
                <tr className='border-bottom'>
                    <td className='px-2 '>#</td>
                    {
                        tableHead.map((th,index)=>(
                            <th key={index+1} className={`px-2 border-start `}>{th}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody className=''>
                {
                    tableData.map(({TransactionDate,Currency,Credit_Debit,TranxAmount,BalAmount,description},index)=>(
                        <tr key={index} className={``} >
                            <td className='py-1 px-2 '>{index+1}</td>
                            <td className='py-1 px-2 border-start'>{TransactionDate}</td>
                            <td className='py-1 px-2 border-start'>{Currency}</td>
                            <td className='py-1 px-2 border-start'>{Credit_Debit}</td>
                            <td className='py-1 px-2 border-start'>{TranxAmount}</td>
                            <td className='py-1 px-2 border-start'>{BalAmount}</td>
                            <td className='py-1 px-2 border-start'>{description}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}


export default LedgerTable