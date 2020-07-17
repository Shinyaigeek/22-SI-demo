export const getRoute = (href: string) => {
    const spt = href.split("/");
    return spt[spt.length - 1]
}