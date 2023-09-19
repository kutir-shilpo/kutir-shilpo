'use client';

import Button from '@/component/ui/button';
import React, { useEffect } from 'react';

const Error = ({ error, reset }) => {
    useEffect(() => {
        console.error(error);
    }, [error])
    return (
        <div className="text-center">
            <h1 className="text-2xl font-semibold text-red-500">
                {error.message || "Something went wrong happened!"}
            </h1>
            <Button onClick={() => reset()}>
                Reset
            </Button>
        </div>
    );
};

export default Error;