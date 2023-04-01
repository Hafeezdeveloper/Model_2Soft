import app from './MainFb'
import { getDatabase ,ref ,set,onValue,push} from "firebase/database";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";

const auth = getAuth(app);
const db = getDatabase(app);

let getDataForAdmin = (nodeName,obj) =>{
    return new Promise( (resolve,reject) =>{
        let refer = ref(db,`${nodeName}/`)
        obj.id  = push(refer).key

        const referenc = ref(db,`${nodeName}/${obj.id}`)
        set(referenc,obj)
        .then((succ) =>{
            resolve("data send successfully")
        })
        .catch((err) =>{
            reject(err.message)
        })
    })
}

let GetDataFromDatabase = (nodeName) =>{
    return new Promise( (resolve,reject) =>{
        let refer = ref(db,`${nodeName}/`)
        onValue(refer, (dt) =>{
            if(dt.exists()){
                let a  = Object.values(dt.val()) 
                // console.log(dt.val())
                resolve(a)
            }
        })
    })
}

let registSend = (nodeName,obj) =>{
    return new Promise( (resolve,reject) =>{
        let refer = ref(db,`${nodeName}/`)
        set(refer,obj)
        .then( (succ) =>{
            resolve("successfully send")
        })
        .catch( (err) =>{
            reject(err.message)
        })
    })
}

let Getregistra = (nodeName) =>{
    return new Promise( (resolve,reject) =>{
        let refere = ref(db,`${nodeName}/`)
        onValue(refere , (dt) =>{
            if(dt.exists()){
                resolve(dt.val())
            }
        })
    })
}


let AuthenAndRegist = (nodeName,obj) =>{
   return new Promise ( (resolve,reject) =>{
       createUserWithEmailAndPassword(auth, obj.email, obj.passwrod)
      .then((succ) => {
          obj.id = succ.user.uid
        let referer =  ref(db,`${nodeName}/${obj.id}`)
        set(referer,obj)
        .then( (succ) =>{
            resolve("successfully send to database")
        })
        .catch( (err) =>{
            reject(err.message)
        })
    })        
    .catch((err) => {
          reject(err.message)
      });

   }) 
}

let AuthenAndLogin = (obj) =>{
    return new Promise( (resolve,reject) =>{
        signInWithEmailAndPassword(auth,obj.email , obj.password)
        .then( (succ) =>{
            
            let reference = ref(db, `RegistrationStudent/${succ.user.uid}`)
            onValue( reference , (dt) =>{
                if(dt.exists()){
                    resolve(dt.val())
                }
            })
        })
        .catch( (err) =>{
            reject(err)
        })
    })
}


export {getDataForAdmin , GetDataFromDatabase , registSend , Getregistra ,
    AuthenAndRegist , AuthenAndLogin}    