import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import { Box, Button, Container, Typography, Grid } from "@material-ui/core";
import CSVReader from "react-csv-reader";
import Table from "pages/components/table";
import UpdateIcon from "@material-ui/icons/Update";
import Mark8Models from "pages/Models/Mark8Models";

const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_"),
};
const Index = () => {
  const [data, setData] = React.useState<Mark8Models[] | null>();
  let arr = [];
  const handleForce = (data: Mark8Models[], fileInfo: any) => {
    data.map((res, i) => {
      if (res.id) {
        arr.push(res);
      }
    });
    setData(arr);
  };
  return (
    <>
      <Box color="white" bgcolor="#002240" height={56}>
        <Container maxWidth="md">
          <Typography component="div" align="center">
            <Box textAlign="justify" fontSize={20} p={1.5}>
              Mark8
            </Box>
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="md">
        <Box
          border={1}
          borderColor="#e7e7e7"
          boxSizing="border-box"
          borderRadius={6}
          mt={10}
        >
          <Box p={2}>
            <Typography component="div" align="center" noWrap>
              <Box textAlign="justify" fontSize={20} p={1.5}>
                Bulk Upload form{" "}
                <InfoIcon color="primary" style={{ top: "5px" }} />
              </Box>
              <Box
                textAlign="justify"
                fontSize={16}
                p={1.5}
                style={{ color: "#0089FF" }}
              >
                You haven't upload any bulk data yet
              </Box>
            </Typography>
          </Box>
        </Box>
        <Box
          borderColor="#e7e7e7"
          border={1}
          boxSizing="border-box"
          borderRadius={6}
        >
          <Box p={2}>
            <Typography component="div">
              <Box textAlign="justify" fontSize={20} p={1.5}>
                Choose your an input medthod
              </Box>
              <Box p={1.5}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={9}>
                    <Box
                      borderColor="#e7e7e7"
                      border={1}
                      boxSizing="border-box"
                      borderRadius={6}
                      p={3}
                      pl={5}
                    >
                      <Grid container spacing={3}>
                        <Grid item xs={8} md={6}>
                          <Box p={1}>
                            <CSVReader
                              onFileLoaded={handleForce}
                              parserOptions={papaparseOptions}
                            ></CSVReader>
                          </Box>
                        </Grid>
                        <Grid item xs={4} md={6}>
                          <Typography variant="h6" component="h2">
                            via CSV file
                          </Typography>
                          <Typography variant="subtitle1" component="h2">
                            อัปเดตข้อมูลจากไฟล์ CSV
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Typography>
          </Box>
        </Box>
        <Box mt={6}>
          <Grid container spacing={2}>
            <Grid item xs={1} md={1}>
              <Typography component="div" align="center" noWrap>
                <Box
                  bgcolor="#F3F5F8"
                  style={{ width: "100%", height: "50px" }}
                >
                  <Typography variant="h6" component="h6">
                    38
                  </Typography>
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={11} md={7}>
              <Typography component="div">
                <Box>
                  <Typography variant="h6" component="h6">
                    listings successfully and Ready to published
                  </Typography>
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography component="div">
                <Button color="primary" startIcon={<UpdateIcon />} size="small">
                  Update data
                </Button>
              </Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography component="div">
                <Button startIcon={<UpdateIcon />} size="small">
                  Published
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box p={6}>
        <Table {...data} />
      </Box>
    </>
  );
};
export default Index;
