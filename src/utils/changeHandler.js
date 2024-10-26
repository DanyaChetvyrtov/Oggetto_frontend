export const changeHandler = (evt, setField, setHasError) => {
    const value = evt.target.value;
    setField(value);
    setHasError((prev) => ({
        ...prev,
        username: value.trim().length === 0,
    }));
}