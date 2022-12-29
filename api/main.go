package main 

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
)

type StatementList struct {
	ID string `json: "id"`
	Statement1 Statement `json: "statement1"`
	Statement2 Statement `json: "statement2"`
	Statement3 Statement `json: "statement3"`
	LieStatement string `json: "liestatement"` 
}

type Statement struct {
	Content string `json: "content"`
	IsLie bool `json: "islie"`
}

var statementlists []StatementList; 

func getIndex(c *gin.Context)  {
	c.JSON(http.StatusOK, gin.H{
		"message": "2 Truths and a Lie API.", 
	});
}

func getStatementList(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, statementlists); 
}

func postStatementList(c *gin.Context) {
	var newStatementList StatementList;

	if err := c.BindJSON(&newStatementList); err != nil {
		return;
	}

	statementlists = append(statementlists, newStatementList);
	c.IndentedJSON(http.StatusCreated, newStatementList);
}

func main() {
	router := gin.Default(); 
	router.Use(cors.Default());
	router.GET("/", getIndex); 
	router.GET("/api/v1/statements", getStatementList);
	router.POST("/api/v1/statements", postStatementList);  
	router.Run(":8000"); 
}