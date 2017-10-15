module.exports = {
//  url : 'mongodb://ricardoplouis:47By23iS@ds053320.mlab.com:53320/learnmern'
  url : process.env.MONGO_URI + '/meetingminutes' || 'mongodb://ricardoplouis:47By23iS@ds153113.mlab.com:53113/meetingminutes',
}
