export default {
    control: (styles, { isDisabled, }) => ({ ...styles, backgroundColor: '#273242', cursor: isDisabled ? 'not-allowed' : 'pointer', }),
    option: (styles, { isDisabled, }) => {
        return {
            ...styles,
            backgroundColor: "#273242",
            color: '#fff',
            margin: 0,
            cursor: isDisabled ? 'not-allowed' : 'pointer',
            ':hover': {
                ...styles[':active'],
                backgroundColor: 'rgb(17 24 39)'
            }
        };
    },
    input: (styles, { isDisabled }) => ({
        ...styles,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
    }),
    placeholder: (styles, { isDisabled }) => ({
        ...styles, backgroundColor: "#273242",
        cursor: isDisabled ? 'not-allowed' : 'pointer',
    }),
    singleValue: (styles, { isDisabled }) => ({
        ...styles,
        backgroundColor: "#273242",
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        color: '#fff'
    }),
};