import "../styles/UserContacts.css";

interface IUserContacts {
    contacts: any
}

export const UserContacts = (params: IUserContacts) => {

    return (
        <div className="UserContacts Translucent__Block Block__Active User__Content__Item">
            <div className="UserContacts__List">
                {params.contacts.map((e: any, id: number) =>
                    <div key={id} className="UserContacts__List__Item">
                        <div className="UserContacts__List__Item__contact_name">{e.contact_name}</div>
                    </div>
                )}
            </div>
        </div>
    );
};
