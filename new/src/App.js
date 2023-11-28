import {
  Heading,
  Box,
  CircularProgress,
  CircularProgressLabel,
  Stat,
  StatNumber,
} from "@chakra-ui/react";
import { TbCurrencyNaira } from "react-icons/tb";
import { BsThreeDots } from "react-icons/bs";
import { IoFastFood } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { TbFileReport } from "react-icons/tb";
import { SiGooglechat } from "react-icons/si";
import { LiaChartBarSolid } from "react-icons/lia";
import { IoPersonOutline } from "react-icons/io5";
import "./App.css";

function App() {
  return (
    <Box
      w="100%"
      p="5"
      display="flex"
      justifyContent="center"
      alignContent="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        boxShadow="base"
        borderRadius="10px"
        w="375px"
      >
        <Box p="5">
          <Box p="2">
            <Heading size="xl">Budget</Heading>
          </Box>
          <Box
            p="2"
            display="flex"
            alignItems="center"
            gap="3"
            color="#707480"
            fontSize="sm"
          >
            <TbCurrencyNaira className="icons" />
            <p>Money budget</p>
          </Box>
          <Box>
            <Stat bg="white" boxShadow="base" rounded="10px" p="1" mt="2">
              <StatNumber display="flex" alignItems="center" fontSize="2xl">
                <TbCurrencyNaira className="icon2" />
                120,000
              </StatNumber>
            </Stat>
          </Box>

          {/* usage Section */}
          <Box>
            <Box
              p="2"
              display="flex"
              alignItems="center"
              gap="2"
              mt="3"
              color="#707480"
              fontSize="sm"
              justifyContent="space-between"
              fontWeight="500"
            >
              <Box display="flex" gap="3">
                <p className="pTag">Last Month</p>
                <p className="pTag">This Month</p>
              </Box>
              <Box>
                <BsThreeDots className="icon3" />
              </Box>
            </Box>

            {/* usage Section */}

            {/* progressBaR Section */}

            <Box display="flex" justifyContent="center" mt="10">
              <CircularProgress
                value={49}
                size="180px"
                color="#0466C8"
                border="10px solid #67A2DC"
                rounded="40rem"
                thickness="5px"
                trackColor="none"
              >
                <CircularProgressLabel>49%</CircularProgressLabel>
              </CircularProgress>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              gap="3"
              alignItems="center"
              color="#707480"
              fontSize="14px"
              mt="2"
            >
              <p className="pTag">Amount spent so far</p>
              <p className="pTagI">
                ₦50,000<span color="#67A2DC">/₦120,000</span>
              </p>
            </Box>
          </Box>

          {/* progressBaR Section */}

          {/* CategorySection */}

          <Box>
            <Heading size="md" fontWeight="500" mt="10">
              Category Breakdown
            </Heading>
            <Box
              mt="20px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box display="flex" gap="2">
                <Box>
                  <CircularProgress
                    value={30}
                    color="#C89104"
                    bg="#F4E9CD"
                    rounded="5rem"
                    trackColor="none"
                  >
                    <CircularProgressLabel
                      display="flex"
                      justifyContent="center"
                      fontSize="2xl"
                      color="#C89104"
                    >
                      <IoFastFood />
                    </CircularProgressLabel>
                  </CircularProgress>
                </Box>
                <Box fontSize="14px" fontWeight="500">
                  <p>Food and Drink</p>
                  <p>40%</p>
                </Box>
              </Box>
              <Box fontSize="14px" fontWeight="500">
                <p className="pTagII">
                  ₦20,000<span color="#67A2DC">/₦42,000</span>
                </p>
              </Box>
            </Box>
            <Box
              mt="20px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box display="flex" gap="2">
                <Box>
                  <CircularProgress
                    value={30}
                    color="#038A39"
                    bg="#038A3933"
                    rounded="5rem"
                    trackColor="none"
                  >
                    <CircularProgressLabel
                      display="flex"
                      justifyContent="center"
                      fontSize="2xl"
                      color="#038A39"
                    >
                      <IoFastFood />
                    </CircularProgressLabel>
                  </CircularProgress>
                </Box>
                <Box fontSize="14px" fontWeight="500">
                  <p>Savings</p>
                  <p>20%</p>
                </Box>
              </Box>
              <Box fontSize="14px" fontWeight="500">
                <p className="pTagII">
                  ₦10,000<span color="#67A2DC">/₦24,000</span>
                </p>
              </Box>
            </Box>
          </Box>

          {/* CategorySection */}
        </Box>

        {/* Navigation Section */}
        <Box
          bg="white"
          boxShadow="base"
          height="10vh"
          borderRadius="10px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p="4"
          color="#707480"
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box fontSize="3xl">
              <IoHomeOutline />
            </Box>
            <Box fontSize="12px">
              <p>Home</p>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box fontSize="3xl">
              <TbFileReport />
            </Box>
            <Box fontSize="12px">
              <p>Reports</p>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box fontSize="3xl">
              <SiGooglechat />
            </Box>
            <Box fontSize="12px">
              <p>Chat</p>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box fontSize="3xl">
              <LiaChartBarSolid />
            </Box>
            <Box fontSize="12px">
              <p>Budgets</p>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box fontSize="3xl">
              <IoPersonOutline />
            </Box>
            <Box fontSize="12px">
              <p>Profile</p>
            </Box>
          </Box>
        </Box>

        {/* Navigation Section */}
      </Box>
    </Box>
  );
}
export default App;
