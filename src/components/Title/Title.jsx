import './Title.css';

export const Title = ({type, children}) => {
    switch(type) {
        case 'h1':
            return <h1 className='title1'>{children}</h1>;
        case 'h3':
            return <h3 className='title3'>{children}</h3>;
        default:
            return null;
    }
};
