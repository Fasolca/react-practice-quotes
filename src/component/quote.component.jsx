function Quote(props) {
  const showQuote = () => {
    alert("Возвращайтесь за новыми цитатами или перезагрузите страницу");
  };

  return (
    <blockquote className="quote" onClick={showQuote}>
      "{props.quote}"<br />
      <cite>"{props.name}"</cite> <br />
      <img src={props.photo} alt="shot" width="300" />
    </blockquote>
  );
}

export default Quote;
