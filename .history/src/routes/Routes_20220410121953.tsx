interface IRouter { 
    component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    render?: (props: RouteComponentProps<any>) => React.ReactNode;
    children?: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode;
    path?: string | string[];
    exact?: boolean;
    sensitive?: boolean;
    strict?: boolean;
    isPrivate?: boolean
}

export default function RouteWrapper({ isPrivate, ...rest }: IRouter)
{
    const loading = false;
    const signed = false;
 
    if(loading)
    {
        return (
            <div>
                <h1>Carregand</h1>
            </div>
        )
    }
    if(!signed && isPrivate)
    {
        return <Redirect to="/" />
    }
    if( signed && !isPrivate )
    {
        return <Redirect to="dashboard" />
    }
 
    return (
        <Route {...rest} 
            render={ props => (
                <Component {...props}/>
            )}
        />
    )       
}