// import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <h1>Anonymous Mailer</h1>
      <div className="form-container">
        <p>
          <input type="text" placeholder="Recipient's Email" />
        </p>
        <p>
          <input type="text" placeholder="Subject of your email" />
        </p>
        <p>
          <textarea></textarea>
        </p>
        <p>
          <button>Send</button>
        </p>
      </div>
    </main>
  )
}
