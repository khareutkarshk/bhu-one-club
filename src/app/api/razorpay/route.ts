// import { NextApiRequest, NextApiResponse } from 'next';
import Razorpay from 'razorpay';

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     try {
//       const { amount, currency, receipt, notes } = req.body;

//       // Initialize Razorpay instance with your key_id and key_secret


//       // Create the order using Razorpay's orders.create method
//       const order = await instance.orders.create({
//         amount: amount, // Amount is in paisa
//         currency: currency,
//         receipt: receipt,
//         notes: notes,
//       });

//       console.log(order);

//       // Send the order ID in the response with status code 200
//       return res.status(200).json({ orderId: order.id });
//     } catch (error:any) {
//       // Send the error message in the response with status code 500
//       return res.status(500).json({ error: error.message });
//     }
//   }
// }

import { NextRequest, NextResponse } from "next/server";


export async function POST(request:NextRequest){

    try{

        const reqBody = await request.json();
        const {amount, currency, receipt, notes} = reqBody;
        console.log(reqBody);
       

        return NextResponse.json({
            message:"Email verified successfully",
            seccess:true
        })
        

    } catch (error:any){
        return NextResponse.json({error:error.message},
            {status:500})
    }
}