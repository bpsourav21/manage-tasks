import ScaleLoader from "react-spinners/ScaleLoader";

const Loader = () => {
    return (
        <span className="flex flex-col items-center justify-center h-96">
            <ScaleLoader
                color="rgba(27, 27, 27, 1)"
                height={50}
                margin={10}
            />
        </span>
    )
}

export default Loader;