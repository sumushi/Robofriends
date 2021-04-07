function Card({ name, id, email }) {
    return (

        <div className='bg-light-green dib br3 pa3 ma2 grow shadow-5 tc'>
            <img alt='robo' src={`https://robohash.org/${id}`} />
            <div>
                <h2>{`${name}`}</h2>
                <p>{`${email}`}</p>
            </div>
        </div>
    );
}
export default Card;
