import { useEffect } from "react";
import { setUserSetting } from "../../functions/Hooks";
import AvatarEditor from 'react-avatar-editor'
import { IFieldChange } from "../organelles/FieldChange";
import { inApiSaveAvatar } from "../logics/inApiSave";
import Arrow from '../../../assets/settings/leftArrow.svg'
import Avatar from '../../../assets/userChange/Avatar.svg'

export const FieldChangeAvatar = (params: IFieldChange) => {
    const handleApiSave = async () => {
        try {

            const result = await inApiSaveAvatar({ file: params.newValue });
            if (result) {
                setUserSetting(false);
            } else {
                setUserSetting(false);
            }
        } catch (error) {
            console.log("handleApiSave error", error);
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const image = new Image();
                image.src = reader.result as string;
                image.onload = () => {
                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d');
                    const size = Math.min(image.width, image.height);
                    canvas.width = size;
                    canvas.height = size;
                    const x = (image.width - size) / 2;
                    const y = (image.height - size) / 2;
                    context?.drawImage(image, x, y, size, size, 0, 0, size, size);
                    canvas.toBlob((blob) => {
                        if (blob) {
                            const croppedFile = new File([blob], file.name, { type: 'image/jpeg' });
                            params.setNewValue && params.setNewValue(croppedFile)
                            console.log('Обрезанный файл:', croppedFile);
                        }
                    }, 'image/jpeg');

                };
            };

            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        params.setNewValue && params.setNewValue(params.value)
    }, [])
    return (
        <div className="FieldChange__General" >
            <form onSubmit={e => { e.preventDefault(); params.check && handleApiSave() }} className="FieldChange" >
                <img src={Arrow} className="FieldChange__Arrow" alt="Arrow" onClick={() => setUserSetting(false)} />
                <div className="FieldChange__Header" >
                    <img className="FieldChange__Image" alt="" src={Avatar} />
                    <div className="FieldChange__BR">
                        Здесь вы можете изменить информацию о себе
                    </div>
                </div>
                <div className="FieldChange__Info">
                    <div className="FieldChange__Title__Image FieldChange__Title" >
                        {params.title}
                    </div>
                    <div className="FieldChange__Inputs">
                        <div className="FieldChange__Inputs__Avatar">
                            <AvatarEditor
                                image={params.newValue}
                                width={250}
                                height={250}
                                border={10}
                                color={[14, 138, 195, 0.5]}
                                scale={params.newValue?.scale}
                                rotate={0}
                                borderRadius={900}
                            />
                        </div>
                    </div>
                </div>
                <div className="FieldChange__Button__Group">
                    <div className="FieldChange__Button__Group__Cancel" onClick={() => setUserSetting(false)}>
                        Отменить
                    </div>
                    <input
                        id="file-input"
                        type="file"
                        onChange={handleFileChange}
                        accept="image/*"
                        style={{ display: "none" }}
                    />
                    <label htmlFor="file-input" className="FieldChange__Button__Group__Avatar">
                        Изменить
                    </label>
                    <input type="submit" className={params.check ? "FieldChange__Button__Group__Save" : "FieldChange__Button__Group__Cancel"} value="Сохранить" />

                </div>
            </form>
        </div>
    );
};
