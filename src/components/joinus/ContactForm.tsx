import React, { FormEvent, useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzlnabn";

export const ContactForm: React.FC = () => {
  const [contactperson, setContactperson] = useState("");
  const [nameorg, setNameorg] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nameorg,
          contactperson,
          phone,
          email,
          message,
        }),
      });

      if (response.ok) {
        setStatus("Повідомлення успішно надіслано.");
        setNameorg("");
        setContactperson("");
        setPhone("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Помилка при надсиланні форми.");
      }
    } catch (error) {
      setStatus("Сталася помилка.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "24px",
      }}
    >
      <h2>Форма зворотного зв'язку</h2>

      <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "16px" }}>
          <label
            htmlFor="nameorg"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Назва організації
          </label>

          <input
            id="nameorg"
            type="text"
            name="nameorg"
            value={nameorg}
            onChange={(e) => setNameorg(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
        </div>
          <div style={{ marginBottom: "16px" }}>
          <label
            htmlFor="contactperson"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Контактна особа
          </label>

          <input
            id="contactperson"
            type="text"
            name="contactperson"
            value={contactperson}
            onChange={(e) => setContactperson(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
        </div>
          <div style={{ marginBottom: "16px" }}>
          <label
            htmlFor="phone"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Телефон
          </label>

          <input
            id="phone"
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
        </div>


        <div style={{ marginBottom: "16px" }}>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Ваш Email
          </label>

          <input
            id="email"
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label
            htmlFor="message"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Повідомлення
          </label>

          <textarea
            id="message"
            name="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "12px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          {loading ? "Надсилання..." : "Надіслати"}
        </button>
      </form>

      {status && (
        <p style={{ marginTop: "0px" }}>
          {status}
        </p>
      )}
    </div>
  );
};