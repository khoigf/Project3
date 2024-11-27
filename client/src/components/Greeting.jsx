import { useEffect, useState } from 'react';

export function Greeting() {
    const [greeting, setGreeting] = useState(null);
    
    useEffect(() => {
        const apiUrl = import.meta.env.VITE_API_URL || ""; // You should define your API URL as VITE_API_URL in your .env file
        fetch(apiUrl+'/api/greeting')
            .then((res) => res.json())
            .then((data) => setGreeting(data.greeting));
    }, [setGreeting]);

    if (!greeting) return null;

    return <h1 className="text-center mb-5">{greeting}</h1>;
}
