import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/rootReducer";
import { getCommentsAsync } from "../Redux/commentReducer";

type Itemsprops = {
    id:number,
    name: string,
    email: string,
    body: string
}

const Main = (props:{}) => {
    const comments: any = useSelector((state: RootState) => state.commentsReducer.comments);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCommentsAsync());
    }, []);
    
  return (
    <div>  
{comments.map((items:Itemsprops) =><ul key={items.id}>
  Email : {items.email}<br/>
  Name :  {items.name}<br/>
  Body : {items.body}<br/> </ul> )}
    </div>
  );
};

export default Main;

