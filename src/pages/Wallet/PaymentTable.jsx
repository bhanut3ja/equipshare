import React from 'react'

const PaymentTable = () => {
  const tableHead = ['Site/User','Date','Payment Mode','Invoice No.','Amount','Description','Action'];
  const tableData=[
    {
        siteName:'site Name',
        date:'20/2/2002',
        paymentMode:'NEFT',
        invoice:'12345',
        amount:'50000',
        description:'This is description'
    },
    {
        siteName:'site Name',
        date:'20/2/2002',
        paymentMode:'NEFT',
        invoice:'12345',
        amount:'50000',
        description:'This is description'
    },
    {
        siteName:'site Name',
        date:'20/2/2002',
        paymentMode:'NEFT',
        invoice:'12345',
        amount:'50000',
        description:'This is description'
    },
    {
        siteName:'site Name',
        date:'20/2/2002',
        paymentMode:'NEFT',
        invoice:'12345',
        amount:'50000',
        description:'This is description'
    },
    {
        siteName:'site Name',
        date:'20/2/2002',
        paymentMode:'NEFT',
        invoice:'12345',
        amount:'50000',
        description:'This is description'
    },
    {
        siteName:'site Name',
        date:'20/2/2002',
        paymentMode:'NEFT',
        invoice:'12345',
        amount:'50000',
        description:'This is description'
    },
    {
        siteName:'site Name',
        date:'20/2/2002',
        paymentMode:'NEFT',
        invoice:'12345',
        amount:'50000',
        description:'This is description'
    },
    {
        siteName:'site Name',
        date:'20/2/2002',
        paymentMode:'NEFT',
        invoice:'12345',
        amount:'50000',
        description:'This is description'
    },
]


  return (
    <div className='p-3 '>
        <table className='w-100 border'>

            <thead className=''>
                <tr className='border-bottom'>
                    <td className='px-2 '>#</td>
                    {
                        tableHead.map((th,index)=>(
                            <th key={index+1} className={`px-2 border-start`}>{th}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody className=''>
                {
                    tableData.map(({siteName,date,paymentMode,invoice,amount,description},index)=>(
                        <tr key={index} >
                            <td className='py-1 px-2 '>{index+1}</td>
                            <td className='py-1 px-2 border-start'>{siteName}</td>
                            <td className='py-1 px-2 border-start'>{date}</td>
                            <td className='py-1 px-2 border-start'>{paymentMode}</td>
                            <td className='py-1 px-2 border-start'>{invoice}</td>
                            <td className='py-1 px-2 border-start'>{amount}</td>
                            <td className='py-1 px-2 border-start'>{description}</td>
                            <td className='py-1 px-2 border-start'>Accept</td>
                            <td className='py-1 px-2 '>Reject</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}


export default PaymentTable