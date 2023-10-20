import '../App.css';

const NoticiaComponente = ({titulo, imagem, descr, categ}) => {
    return(
        <div className='noticia'>
            <h2 className='titulo-noticia'>{titulo}</h2>
            <img src={imagem} />
            <p className='descrição-noticia'>{descr}</p>
            <p className='cat-noticia'>{categ}</p>
        </div>

    );
};

export default NoticiaComponente;