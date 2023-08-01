import { ProductData } from '../redux/types';

const VideoDetails = ({ products }: { products: ProductData }) => {
    console.log();
    const videoUrl = products.video;
    const videoId = videoUrl.split('v=')[1];
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="mt-4 bg-white rounded-md">
            <p className="font-semibold p-2">Video</p>
            <div className="flex justify-center py-2">
                <iframe src={videoSrc} className="px-3 lg:px-0 w-full lg:w-2/3" height="350"></iframe>
            </div>
        </div>
    );
};

export default VideoDetails;
