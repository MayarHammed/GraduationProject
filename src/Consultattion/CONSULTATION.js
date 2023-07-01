import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Header from "../Components/Header";
import { IconButton } from "@mui/material";
import Footer from "../Components/Footer";
import Rotate from 'react-reveal/Rotate';

// ---------------------------------------------
// images
import about from "../images/OIP.png";
import pro from "../images/bx.jpg";
import pro1 from "../images/ew3.jpeg";
import pro2 from "../images/hsd.jpg";
import pro3 from "../images/no.png";
import pro4 from "../images/te.jpg";
import pro5 from "../images/xo.jpg";
import pro6 from "../images/ys.jpg";
import pro7 from "../images/1q.jpg";
import pro8 from "../images/2q.jpg";
import pro9 from "../images/2q.jpg";
import pro10 from "../images/3q.jpg";
import pro11 from "../images/3q.jpg";
import pro12 from "../images/4q.jpg";
import pro13 from "../images/5q.jpg";
import pro14 from "../images/6q.jpg";
import pro15 from "../images/7q.jpg";
import pro16 from "../images/2q.jpg";
// import pro17 from "../images/2q.jpg";
// import pro18 from "../images/2q.jpg";

import "./CONSULTATION.css";
import { Link } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  return (
    <>
      <Rotate top left>
        <Header />
      </Rotate>
      <p className="par_f">
        تشخيص المرض
        <br />
        من قبل أطباء
      </p>
      <div className="Mpp">
        <p className="pp">تشخيص المرض من قبل أستشارة الطبيب </p>
        <button className="aa">Read More </button>
        <button className="aa">About As</button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 50,
          margin: "25px",
          padding: "10px",
        }}
      >
        <Card sx={{ maxWidth: 400, mr: 5 }}>
          <CardMedia
            className="img"
            component="img"
            alt="green iguana"
            height="240"
            image={about}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="h4" color="black" sx={{ mb: 3, fontSize: 34 }}>
              الدكتور . خالدالضامن
            </Typography>
            <Typography variant="h6" color="text.secondary">
              اختصاص في جراحة الاعصاب تختص بالتشخيص والعلاج الجراحي للأمراض
              والإصابات التي تؤثر على الجهاز العصبي المركزي والطرفي.
              <br />
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              مشاركة
            </Button>
            <Link to={"/m"}>
              <Button
                sx={{
                  bgcolor: "blue",
                  color: "white",
                  width: "200px",
                  ml: "2px",
                  fontSize: 18,
                  "&:hover": {
                    bgcolor: "black",
                    color: "white", // تحديد لون النص عند الهوفر
                  },
                }}
              >
                قرارة المزيد
              </Button>
            </Link>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 400, mr: 5 }}>
          <CardMedia
            className="img"
            component="img"
            alt="green iguana"
            height="240"
            image={pro}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="h4" color="black" sx={{ mb: 3, fontSize: 34 }}>
              الدكتور. عبدالله الجزائرلي
            </Typography>
            <Typography variant="h6" color="text.secondary">
              طب الأطفال: يركز على الرعاية الصحية للأطفال من الولادة وحتى سن
              البلوع والعلاج للأمراض والإصابات التي تؤثر على صحة الأطفال
              <br />
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              مشاركة
            </Button>
            <Link to={"/m1"}>
              <Button
                sx={{
                  bgcolor: "blue",
                  color: "white",
                  width: "200px",
                  ml: "2px",
                  fontSize: 16,
                  "&:hover": {
                    bgcolor: "black",
                    color: "white", // تحديد لون النص عند الهوفر
                  },
                }}
              >
                قراءة المزيد
              </Button>
            </Link>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 400, mr: 5 }}>
          <CardMedia
            className="img"
            component="img"
            alt="green iguana"
            height="240"
            image={pro1}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="h4" color="black" sx={{ mb: 3, fontSize: 34 }}>
              Dr.Mayar
            </Typography>
            <Typography variant="h5" color="text.secondary">
              طب الأسرة: يهتم برعاية الرعاية الصحية الشاملة للأفراد والعائلات،
              ويشمل الوقاية من الأمراض والتشخيص والعلاج
              <br />
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              مشاركة
            </Button>
            <Link to={"/m2"}>
              <Button
                sx={{
                  bgcolor: "blue",
                  color: "white",
                  width: "200px",
                  ml: "2px",
                  fontSize: 16,
                  "&:hover": {
                    bgcolor: "black",
                    color: "white", // تحديد لون النص عند الهوفر
                  },
                }}
              >
                قراءة المزيد
              </Button>
            </Link>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 400, mr: 5 }}>
          <CardMedia
            className="img"
            component="img"
            alt="green iguana"
            height="240"
            image={pro2}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="h4" color="black" sx={{ mb: 3, fontSize: 34 }}>
              Dr.Mayar
            </Typography>
            <Typography variant="h5" color="text.secondary">
              اختصاص طب القلب والأوعية الدموية: يهتم بتشخيص وعلاج الأمراض التي
              تؤثر على القلب والأوعية الدموية.
              <br />
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              مشاركة
            </Button>
            <Link to={"/m3"}>
              <Button
                sx={{
                  bgcolor: "blue",
                  color: "white",
                  fontSize: 16,
                  width: "200px",
                  ml: "2px",
                  "&:hover": {
                    bgcolor: "black",
                    color: "white", // تحديد لون النص عند الهوفر
                  },
                }}
              >
                قراءة المزيد
              </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 50,
          margin: "25px",
          padding: "10px",
        }}
      >
        <Card sx={{ maxWidth: 400, mr: 5 }}>
          <CardMedia
            className="img"
            component="img"
            alt="green iguana"
            height="240"
            image={pro3}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="h4" color="black" sx={{ mb: 3, fontSize: 34 }}>
              Dr.Mayar
            </Typography>
            <Typography variant="h5" color="text.secondary">
              اختصاص طب الجهاز الهضمي: يختص بتشخيص وعلاج الأمراض التي تؤثر على
              الجهاز الهضمي، مثل القرحة المعوية والتهاب القولون والتهاب المرارة
              <br />
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              مشاركة
            </Button>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              قراءة المزيد
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 400, mr: 5 }}>
          <CardMedia
            className="img"
            component="img"
            alt="green iguana"
            height="240"
            image={pro4}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="h4" color="black" sx={{ mb: 3, fontSize: 34 }}>
              Dr.Mayar
            </Typography>
            <Typography variant="h5" color="text.secondary">
              اختصاص طب العيون: يركز على تشخيص وعلاج الأمراض والإصابات التي تؤثر
              على العين والرؤية والتحسساس البؤرية
              <br />
              <br />
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              مشاركة
            </Button>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              قراءة المزيد
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 400, mr: 5 }}>
          <CardMedia
            className="img"
            component="img"
            alt="green iguana"
            height="240"
            image={pro5}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="h4" color="black" sx={{ mb: 3, fontSize: 34 }}>
              Dr.Mayar
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              مشاركة
            </Button>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              قراءة المزيد
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 400, mr: 5 }}>
          <CardMedia
            className="img"
            component="img"
            alt="green iguana"
            height="240"
            image={pro6}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="h4" color="black" sx={{ mb: 3, fontSize: 34 }}>
              Dr.Mayar
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              مشاركة
            </Button>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              قراءة المزيد
            </Button>
          </CardActions>
        </Card>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 50,
          margin: "25px",
          padding: "10px",
        }}
      >
        <Card sx={{ maxWidth: 400, mr: 5 }}>
          <CardMedia
            className="img"
            component="img"
            alt="green iguana"
            height="240"
            image={pro7}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="h4" color="black" sx={{ mb: 3, fontSize: 34 }}>
              Dr.Mayar
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              مشاركة
            </Button>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              قراءة المزيد
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 400, mr: 5 }}>
          <CardMedia
            className="img"
            component="img"
            alt="green iguana"
            height="240"
            image={pro8}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="h4" color="black" sx={{ mb: 3, fontSize: 34 }}>
              Dr.Mayar
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              مشاركة
            </Button>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              قراءة المزيد
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 400, mr: 5 }}>
          <CardMedia
            className="img"
            component="img"
            alt="green iguana"
            height="240"
            image={pro9}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="h4" color="black" sx={{ mb: 3, fontSize: 34 }}>
              Dr.Mayar
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              مشاركة
            </Button>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              قراءة المزيد
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 400, mr: 5 }}>
          <CardMedia
            className="img"
            component="img"
            alt="green iguana"
            height="240"
            image={pro10}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="h4" color="black" sx={{ mb: 3, fontSize: 34 }}>
              Dr.Mayar
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              مشاركة
            </Button>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              قراءة المزيد
            </Button>
          </CardActions>
        </Card>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 50,
          margin: "25px",
          padding: "10px",
        }}
      >
        <Card sx={{ maxWidth: 400, mr: 5 }}>
          <CardMedia
            className="img"
            component="img"
            alt="green iguana"
            height="240"
            image={pro11}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="h4" color="black" sx={{ mb: 3, fontSize: 34 }}>
              Dr.Mayar
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              مشاركة
            </Button>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              قراءة المزيد
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 400, mr: 5 }}>
          <CardMedia
            className="img"
            component="img"
            alt="green iguana"
            height="240"
            image={pro12}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="h4" color="black" sx={{ mb: 3, fontSize: 34 }}>
              Dr.Mayar
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              مشاركة
            </Button>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              قراءة المزيد
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 400, mr: 5 }}>
          <CardMedia
            className="img"
            component="img"
            alt="green iguana"
            height="240"
            image={pro13}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="h4" color="black" sx={{ mb: 3, fontSize: 34 }}>
              Dr.Mayar
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              مشاركة
            </Button>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              قراءة المزيد
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 400, mr: 5 }}>
          <CardMedia
            className="img"
            component="img"
            alt="green iguana"
            height="240"
            image={pro14}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="h4" color="black" sx={{ mb: 3, fontSize: 34 }}>
              Dr.Mayar
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              مشاركة
            </Button>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              قراءة المزيد
            </Button>
          </CardActions>
        </Card>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 50,
          margin: "25px",
          padding: "10px",
        }}
      >
        <Card sx={{ maxWidth: 400, mr: 5 }}>
          <CardMedia
            className="img"
            component="img"
            alt="green iguana"
            height="240"
            image={pro15}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="h4" color="black" sx={{ mb: 3, fontSize: 34 }}>
              Dr.Mayar
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              مشاركة
            </Button>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              قراءة المزيد
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 400, mr: 5 }}>
          <CardMedia
            className="img"
            component="img"
            alt="green iguana"
            height="240"
            image={pro16}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="h4" color="black" sx={{ mb: 3, fontSize: 34 }}>
              Dr.Mayar
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              مشاركة
            </Button>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              قراءة المزيد
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 400, mr: 5 }}>
          <CardMedia
            className="img"
            component="img"
            alt="green iguana"
            height="240"
            image={pro15}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="h4" color="black" sx={{ mb: 3, fontSize: 34 }}>
              Dr.Mayar
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              مشاركة
            </Button>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              قراءة المزيد
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 400, mr: 5 }}>
          <CardMedia
            className="img"
            component="img"
            alt="green iguana"
            height="240"
            image={pro12}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="h4" color="black" sx={{ mb: 3, fontSize: 34 }}>
              Dr.Mayar
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              مشاركة
            </Button>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                fontSize: 16,
                "&:hover": {
                  bgcolor: "black",
                  color: "white", // تحديد لون النص عند الهوفر
                },
              }}
            >
              قراءة المزيد
            </Button>
          </CardActions>
        </Card>
      </div>
      <p className="SR">تشخيص المرض وأستشارةالطبيب </p>
      <Footer />
    </>
  );
}
