import { AuthContextInterface } from '@/app/interfaces/interfaces';
import { Button } from 'primereact/button';
import React from 'react';

const Login = ({ isAuthenticated, login }: Partial<AuthContextInterface>) => {
    return (
        <div className='min-h-screen flex justify-center items-center -mt-16'>
            {isAuthenticated?.expireAt && (isAuthenticated?.isLogin && Date.now() > isAuthenticated.expireAt) ?
                <div>
                    <p className='text-3xl font-normal'>Session expired.</p>
                    <Button className='text-xl xs:text-xs inline-block px-14 mt-4' label='Login' onClick={login} />
                </div> : (
                    <div>
                        <p className='text-3xl font-normal'>You are not logged in.</p>
                        <Button className='text-xl xs:text-xs inline-block px-14 mt-4' label='Login' onClick={login} />
                    </div>
                )}
        </div>
    );
};

export default Login;