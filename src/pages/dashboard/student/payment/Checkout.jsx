import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useEffect, useState } from 'react'
import useAuth from '../../../../hooks/useAuth'
import useAxiosSecure from '../../../../hooks/useAxiosSecure'

const Checkout = ({ cart, price }) => {
  const { user } = useAuth()
  const stripe = useStripe()
  const elements = useElements()
  const { axiosSecure } = useAxiosSecure()
  const [clientSecret, setClientSecret] = useState('')
  const [trxId, setTrxId] = useState(null)
  useEffect(() => {
    if (price !== 0) {
      axiosSecure
        .post('/create-payment-intent', {
          price: parseFloat(price).toFixed(2),
        })
        .then((res) => {
          console.log(res)
          setClientSecret(res.data.clientSecret)
        })
    }
  }, [price])
  console.log('Client Secret', clientSecret)
  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }
    const card = elements.getElement(CardElement)
    if (card == null) {
      return
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })
    if (error) {
      console.log('error', error)
    } else {
      console.log('Payment method', paymentMethod)
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'unknown',
            name: user?.displayName || 'anonymous',
          },
        },
      })

    if (confirmError) {
      console.log(confirmError)
    }
    if (paymentIntent?.status === 'succeeded') {
      setTrxId(paymentIntent.id)
      const payment = {
        user: user?.displayName,
        email: user?.email,
        trxID: trxId,
        paid: price,
        items: cart.map((item) => item._id),
        itemsNames: cart.map((item) => item.name),
        status: 'pending',
      }
      axiosSecure.post('/payment', payment).then((res) => {
        console.log(res)
      })
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="lg:w-1/2 p-5 ring ring-accent ring-inset rounded-lg"
    >
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '18px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button
        type="submit"
        disabled={!stripe && !clientSecret}
        className="btn btn-accent w-full mt-5"
      >
        Proceed To Checkout
      </button>
    </form>
  )
}

export default Checkout
