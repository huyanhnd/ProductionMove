import { Link } from 'react-router-dom';
import "./notFoundPage.css";

const NotFoundPage = () => {
    return (
        <div className='notFoundPage'>
            <h1 className="font-medium text-xl">Sorry, this page isn&apos;t available.</h1>
            <p className="mt-8 text-base">
                The link you followed may be broken, or the page may have been removed.{' '}
                <Link to="/">
                    <a className="text-primary">Go back to Production Move</a>
                </Link>
            </p>
        </div>
    );
};

export default NotFoundPage;
