

export const Imaginar = unparametro => {
    const miparametro = 'mundirijillo';
    miparametro=miparametro+unparametro;
    console.log('Components/ProfileFunctions.js: Imaginar(unparametro)'+ miparametro);
    return (
        <img
          src="https://i.imgur.com/1bX5QH6.jpg"
          alt="Lin Lanying"
          width={100}
          height={100}
        />
      );
    
  }