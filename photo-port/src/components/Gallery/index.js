import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from "../PhotoList"

const Gallery = ({currentCategory}) => {
    // const currentCategory = {
    //     name: "commercial",
    //     description:
    //       "Photos of grocery stores, food trucks, and other commercial projects",
    //   };

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{capitalizeFirstLetter(currentCategory.description)}</p>
            <PhotoList category={currentCategory.name} />
        </section>
    )
}


export default Gallery;