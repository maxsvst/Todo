function useClassName() {
    return (
        classes: (string | undefined)[],
        mods?: {[key: string]: boolean | undefined | null}
    ) => {
        const cssStore = [...classes.filter((css) => !!css)];
        if (mods) {
            Object.entries(mods).forEach(([name, status]) => {
                if (status && name !== 'undefined') {
                    cssStore.push(name);
                }
            });
        }
        return cssStore.join(' ');
    };
}

export default useClassName;