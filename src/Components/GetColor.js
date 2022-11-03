import '../css/index.css';
import RandomColor from './FallbackColors';
import { useSearchParams } from 'react-router-dom';

const GetColor = () => {
    const [search, setSearch] = useSearchParams();
    let col = search.get('col')

    const checkHex = () => {
        const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(col);
        return r ? true : false;
    }

    if (!checkHex(col)) {
        col = RandomColor;
    }

    const res = col ? true : col = RandomColor;

    col = "#" + col;



    function hexToRgb(hex) {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    let red = hexToRgb(col).r
    let green = hexToRgb(col).g
    let blue = hexToRgb(col).b

    return {
        red,
        green,
        blue,
        res,
        col,
        setSearch,
        hexToRgb,
        checkHex
    }
}

export default GetColor