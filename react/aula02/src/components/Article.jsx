import PropTypes from 'prop-types';

const Artigo = ({ titulo, noticia }) => {
    return (
      <article>
        <h2>{titulo}</h2>
        <p>{noticia}</p>
      </article>
    );
  };

Artigo.propTypes = {
  titulo: PropTypes.string.isRequired,
  noticia: PropTypes.string.isRequired,
};
  
export default Artigo;