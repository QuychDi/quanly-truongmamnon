import { useState } from "react";
import { toast } from 'react-toastify';
const Upload = () => {

    const [selectedImage, setSelectedImage] = useState();

    // This function will be triggered when the file field change
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
            console.log(e.target.files[0].name);
        }
    };

    // This function will be triggered when the "Remove This Image" button is clicked
    const removeSelectedImage = () => {
        setSelectedImage();

    };

    return (

        <>
            <div style={styles.container}>
                <input className="uploadfile"
                    accept="image/*"
                    type="file"
                    onChange={imageChange}
                />

                {selectedImage && (
                    <div style={styles.preview}>
                        <img
                            src={URL.createObjectURL(selectedImage)}
                            style={styles.image}
                            alt="Thumb"
                        />
                        <button className="btn_deleteImg" onClick={removeSelectedImage} style={styles.delete}>
                            Remove This Image
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Upload;

// Just some styles
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    preview: {
        height: '100px',
        display: "flex",
        flexDirection: "column",
        container: 'flex'
    },
    image: {
        maxWidth: "354px", maxHeight: '472px', position: 'absolute', float: 'left',
        transform: 'translate(-50%, -42.55%)'
    },
    delete: {
        cursor: "pointer",
        position: 'absolute',
        index: '2',
        // background: "red",
        // color: "white",
        // border: "none",
    },
};