//On this page fact cards shall be displayed
import './ClimateMigration.css'
import React, {useState, Fragment} from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Pagination from '@material-ui/lab/Pagination';

import AnimatedFactCards from "../components/AnimatedFactCards";
import Header from "../components/Header";
import Footer from "../components/Footer";


//----- pop up ----

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";


// const useStyles = makeStyles({
//   button: {
//     color: "white",
//   },
//   ul: {
//     marginBottom: 70,
//     "& .MuiPaginationItem-root": {
//       color: "#ffffff",
//     },
// },
//   media: {
//     height: 200,
//   },
//   results:{
//     height: "100%",
//   }
// });


function ClimateMigrationFacts() {
    const [selectedFact, setSelectedFact] = useState(null);
  
    return (
        <div>
            Background Introductory<br />
        </div>
    )
}

// const ResultsPage = ({
//   scientistQuestions,
//   selectedQuestion,
//   setOpen,
//   open,
//   setselectedScientist,
//   selectedScientist,
//   setselectedPrograms
// }) => {
//   const history = useHistory();
//   const classes = useStyles();

  
//   const handleClickOpen = (sq) => {
//     setselectedScientist(sq);
//     setOpen(true);
//   };
//   const handleClose = (e) => {
//     setOpen(false);
//   };

//   const handleWikiClick = (selectedScientist) => {
//     let path = window.open(selectedScientist.wiki_link);
//     history.push(path);
//     setOpen(false);
//   };

//   const handleUniPrograms = (e) => {
//     setselectedPrograms(selectedScientist.id);
//     let path = `/careerpath`;
//     history.push(path);
//     setOpen(false);
//   };

//   const theme = useTheme();
//   const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

//   //-- pagination
//   const [page, setPage ] = useState(1)
  
//   const filteredScientists = scientistQuestions && scientistQuestions.filter((sq) => sq.question_id === selectedQuestion);

//   const handlePagination = scientist => {
//     const slicedscientist = scientist.slice(page === 1 ? 0 : (page - 1) * 10, page === 1 ? 10 : ((page - 1) * 10) + 10)
//     return slicedscientist
//   }
  
//   return (
//     <Grid style={{ width: '100%' }}>
//       <NavBar />
// <div style={{marginTop: '140px'}}>
//     <Grid container direction="row" justify="center" alignItems="center" xs={12}>
//       <Grid  item xs={12} >
//       <h1> Meet the Women </h1>
//       </Grid>
      
//       <Grid item xs={12} className={classes.results}>
//         {filteredScientists && handlePagination(filteredScientists)
//             .map((sq, i) => {
//               return (
//                 <Fragment   key={i}>
//                   <Button 
//                     color="primary"
//                     onClick={() => handleClickOpen(sq)}
//                   >
//                     <AnimatedCardResults
//                       sq={sq}
//                       setOpen={setOpen}
//                       open={open}
//                     />
                  
//                   </Button>
                  
//                   {selectedScientist && (
//                     <Dialog
//                       fullScreen={fullScreen}
//                       open={open}
//                       element={selectedScientist}
//                       onClose={handleClose}
//                       aria-labelledby="responsive-dialog-title"
//                     >
//                       <DialogTitle id="responsive-dialog-title">
//                         {" "}
//                         {selectedScientist.first_name}{" "}
//                         {selectedScientist.last_name}{" "}
//                       </DialogTitle>
//                       <DialogContent>
//                         <DialogContentText>
//                           <img
//                             className={classes.media}
//                             src={selectedScientist.picture}
//                             alt="scientist woman working"
//                           />
//                          <p> {selectedScientist.last_name} {selectedScientist.short_description} </p> 
                          
                  
//                         </DialogContentText>
//                       </DialogContent>
//                       <DialogActions>
//                         <Button onClick={handleClose}>Close</Button>
//                         <Button
//                           onClick={() => handleWikiClick(selectedScientist)}
//                           >
//                           learn more about {selectedScientist.first_name}{" "}
//                           {selectedScientist.last_name}
//                         </Button>
//                         <Button
//                           onClick={handleUniPrograms}
//                         >
//                           follow her career path!
//                         </Button>
//                       </DialogActions>
//                     </Dialog>
//                   )}
                  
//                 </Fragment>
//               );
//             })}
      
//          </Grid>    
//          <Grid item container
//           direction="row"
//           justify="center"
//           alignItems="center" xs={12}>
//          <Pagination classes={{ ul: classes.ul }} count={Math.floor(filteredScientists.length / 10)} color="primary" onChange={(e,p) => setPage(p)} /> 
//          </Grid> 
//       </Grid>
//       </div>
//       <Footer/>
//     </Grid>
//   );
// };


export default ClimateMigrationFacts


