import React from "react";
import "./faqs.css";

const FAQ = () => {
  const faqData = [
    {
      question: "How do I borrow a book?",
      answer: "You can borrow a book by using our convenient QR code scanning feature. Simply point your device at the book's QR code, and you can check it out instantly."
    },
    {
      question: "What types of books do you have?",
      answer: "We have a wide range of books spanning various genres, so you can find something that suits your interests."
    },
    {
      question: "How can I access my reading history?",
      answer: "You can easily access your reading history in your profile. It allows you to see the books you've borrowed and returned."
    }
  ];

  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      <ul className="faq-list">
        {faqData.map((item, index) => (
          <li key={index}>
            <div className="question">{item.question}</div>
            <div className="answer">{item.answer}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
