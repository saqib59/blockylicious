import { useBlockProps, MediaUploadCheck, MediaUpload } from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import metadata from './block.json';
import { ImageThumbnail } from '../../components/imageThumbnail';
import "./editor.scss";
import { useImage } from '../../hooks/useImage';

export default function Edit(props){
    const blockProps = useBlockProps();
    const image = useImage(props.attributes.imageId)
    const imageSelected = !!props.attributes.imageId && !!image?.source_url;

    return <div {...blockProps}>
        {!!imageSelected && <ImageThumbnail imageId={props.attributes.imageId} />}

        {!imageSelected && 
            <div style={{display: "flex", height: 150, width: "100%", background: "white"}}>
                <Icon icon="format-image" style={{margin: "auto"}} />
            </div>
        }
        <MediaUploadCheck>
            <MediaUpload allowedTypes={["image"]} render={({open}) => {
                    return (
                        <button className='media-select' onClick={open}>
                            {imageSelected &&
                                __("Change image", metadata.textdomain)
                            }
                            {!imageSelected &&
                                __("Select an image", metadata.textdomain)
                            }
                        </button>
                    )
            }}
                value={props.attributes.imageId}
                onSelect={(item) => {
                    props.setAttributes({
                        imageId: item.id
                    })
                }}
            />
        </MediaUploadCheck>
    </div>;
}