import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Form = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const BOT_TOKEN = '8013371135:AAFmFt-LB_JGvsAeahxVu_ChBk5levDkVDw'
    const CHAT_ID = '768856332'

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const message = `📩 *New Contact Message*\n👤 Name: ${form.name}\n📧 Email: ${form.email}\n📝 Message: ${form.message}`

        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`

        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message,
                    parse_mode: 'Markdown',
                }),
            })

            if (res.ok) {
                toast.success('✅ Message sent Sucessfully. Thank You!')
                setForm({ name: '', email: '', message: '' })
            } else {
                toast.error('❌ Telegram API Error')
            }
        } catch (error) {
            console.error('Telegram error:', error)
            toast.error('❌ Failed to send message')
        }
    }

    return (
        <div>
            <h1 className='text-[24px] sm:text-[30px] xl:text-[35px] font-[700]'>Send me a note</h1>
            <form onSubmit={handleSubmit} className="space-y-6 mt-10">
                <div>
                    <label className="block text-gray-400 mb-1 text-[14px] sm:text-[16px] lg:text-[20px]">Your Name:</label>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-gray-600 text-[14px] sm:text-[16px] lg:text-[20px] focus:outline-none focus:border-yellow-400 text-white py-2"
                    />
                </div>
                <div>
                    <label className="block text-gray-400 mb-1 text-[14px] sm:text-[16px] lg:text-[20px]">Your Email:</label>
                    <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-gray-600 text-[14px] sm:text-[16px] lg:text-[20px] focus:outline-none focus:border-yellow-400 text-white py-2"
                    />
                </div>
                <div>
                    <label className="block text-gray-400 mb-1 text-[14px] sm:text-[16px] lg:text-[20px]">Describe what you need:</label>
                    <textarea
                        name="message"
                        rows="4"
                        value={form.message}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-gray-600 text-[14px] sm:text-[16px] lg:text-[20px] focus:outline-none focus:border-yellow-400 text-white py-2"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-[#ffc107] hover:bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold transition text-[14px] sm:text-[16px] lg:text-[20px]"
                >
                    Send Message
                </button>
            </form>

            {/* Toast Container */}
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}

export default Form