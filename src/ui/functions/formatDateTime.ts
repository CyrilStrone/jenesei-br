export const formatDateTime = (dateTimeString: any) => {
    const date = new Date(dateTimeString);
    const now = new Date();

    if (date.getFullYear() === now.getFullYear()) {
        if (date.getMonth() === now.getMonth() && date.getDate() === now.getDate()) {
            return date.toLocaleTimeString('ru-RU', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
        } else {
            return date.toLocaleString('ru-RU', { hour12: false, month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
        }
    } else {
        return date.toLocaleString('ru-RU', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }
};