import React from "react";
import { Box } from "@mui/material";
import '../../styles/UserStats.css'

const UserStats = () => {

    return(
    <div className="stats-container">
        <div className="stats-grid-container">
            <Box display="flex" justifyContent = "center" alignItems = "center" height = "100%" width="100%">
                <div className="stats-grid">
                    <div className="stats-cell">
                        <ul>
                            <li style={{
                                color: "#6137E3"
                            }}>10</li>
                            Total questions
                        </ul>
                    </div>
                    <div className="stats-cell">
                        <ul>
                            <li style={{
                                color: "#6137E3"
                            }}>70%</li>
                            Success rate
                        </ul>
                    </div>
                    <div className="stats-cell">
                        <ul>
                            <li style={{
                                color: "#EE0808"
                            }}>03</li>
                            Wrong
                        </ul>
                    </div>
                    <div className="stats-cell">
                        <ul>
                            <li style={{
                                color: "#08D74D"
                            }}>07</li>
                            Correct
                        </ul>
                    </div>
                </div>
            </Box>
        </div>
    </div>);
};

export default UserStats;