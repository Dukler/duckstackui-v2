import useRolesApi from "./useRolesApi";

export default function useUnauthorizedRender({req, res}) {
    const routeName = req.url.slice(1);

    const [unauthorizedPages] = useRolesApi('pages');

    const sendRedirectLocation = (location) => {
        res.writeHead(302, {
            Location: location,
        });
        res.end();
        return { props: {} }; // stop execution
    };

    if (unauthorizedPages.includes(routeName)) sendRedirectLocation('/unauthorized')

}